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
        @users = User.where(group_id: params[:group_id])
        render 'api/users/index'
    end

    def update
        @user = User.find_by(id: params[:id])
        render json: ['unable to find user'] unless @user
        group = Group.find_by(id: user_group_params[:group_id])
        if (group)
            if (group.is_password?(params[:user][:group_password]))
                @user.update(user_group_params)
                render :show
            else
                render json: ['unable to find group'], status: 422
            end
        elsif @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def user_params
        params.require(:user).permit!
    end

    def user_group_params
        params.require(:user).permit(:group_id)
    end
end