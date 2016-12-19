# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class OnlineUsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'online_users_channel'
    current_user.update(is_online: true)
  end

  def unsubscribed
    id = current_user.id
    current_user.update(is_online: false)
  end

  def online(options)
    UserOnlineJob.perform_later(current_user)
  end

  def offline(user_id)
    UserOfflineJob.perform_later(user_id)
  end
end
