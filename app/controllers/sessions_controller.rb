class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(user_params[:email], user_params[:password])
    if user
      login(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email or password"]
      render :new, status: 401
    end
  end

  def destroy
    logout
    redirect_to new_session_url
  end

end
