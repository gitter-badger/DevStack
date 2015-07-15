class UsersController < ApplicationController
before_filter :authenticate_user!
  def index
  end

  def show
  end

  def profile
    @user = User.first
    respond_to do |format|
      format.html
      format.json {render json: {:user => @user, :github_user => @user.github_user, :stack_user => @user.stack_user, :avg_user_score => @user.avg_user_score}}
    end
  end

  def logout
    session.clear
    redirect_to root_path
  end

end
