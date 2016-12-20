class UserOfflineJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    ActionCable.server.broadcast 'online_users_channel', {
      offline: { id: user_id }
    }
  end
end
