# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class OnlineUsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'online_users_channel'
    current_user.update(is_online: true)
  end

  def unsubscribed
    binding.pry
    id = current_user.id
    current_user.update(is_online: false)
    binding.pry
    UserOfflineJob.perform_later(id)
  end

  def online(options)
    UserOnlineJob.perform_later(current_user)
  end

end
