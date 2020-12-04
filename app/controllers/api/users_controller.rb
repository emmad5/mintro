class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
   
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render 'api/users/index'
    end

    def update
        @user = User.find_by(id: params[:id])
        render json: ['unable to find user'] unless @user
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email, :password, :name, :linked_in, :birthdate)
    end
end