class UserOfflineJob < ApplicationJob
  queue_as :default

  def perform(user_id)
    ActionCable.broadcase 'online_users_channel', {
      offline: { id: user_id }
    }
  end
end
