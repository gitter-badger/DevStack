class StaticPagesController < ApplicationController
  def home
  end

  def help
  end

  def about
  end

  def contact
  end

  def leaderboard
    authenticate_user!
    @users = User.order(user_score: :desc)
    @user = current_user
  end
end
