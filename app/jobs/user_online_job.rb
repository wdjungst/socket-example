class UserOnlineJob < ApplicationJob
  queue_as :default

  def perform(user)
    ActionCable.server.broadcast 'online_users_channel', {
      online: {
        first_name: user.first_name,
        last_name: user.last_name,
        id: user.id
      }
    }
  end
end
