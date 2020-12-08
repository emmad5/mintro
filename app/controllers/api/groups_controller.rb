class Api::GroupsController < ApplicationController
    skip_before_action :verify_authenticity_token
   
    def create
        @group = Group.new(group_params)
        if @group.save
            current_user.group_id = @group.id
            current_user.save
            @user = current_user
            render 'api/users/show'
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def index
        @groups = Group.all
        render 'api/groups/index'
    end

    def update
        @group = Group.find_by(id: params[:id])
        render json: ['unable to find group'] unless @group
        if @group.update(group_params)
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def group_params
        params.require(:group).permit(:name, :professor)
    end
end