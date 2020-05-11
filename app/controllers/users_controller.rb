class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update, :destroy]
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Create successfully!"
      redirect_to root_path
    else
      flash.now[:notice] = "Not created user."
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:name, avatars: [])
  end

  def set_user
    @user = User.find(params[:id])
  end
end
