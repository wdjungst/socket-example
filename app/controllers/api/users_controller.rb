class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def info
    unless current_user
      render json: {}
    end
  end

  def online_users
    @users = User.where("is_online = ? AND users.id <> ?", true, current_user.id)
    render json: @users
  end
end
