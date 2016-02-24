class FeatureRequestController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    if user_signed_in?
      if current_user.is_staff == 0
        @feature = FeatureRequest.select("feature_requests.*, clients.title AS client_title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id")
      else
        @feature = FeatureRequest.select("feature_requests.*, clients.title AS client_title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id").where("feature_requests.user_id = #{current_user.id}")
      end
    else
      redirect_to new_user_session_path
    end
    # raise @feature.inspect
  end

  def new
    @feature = FeatureRequest.new
  end

  def create
    request_params[:title] = params[:feature_request][:title].strip()
    request_params[:description] = params[:feature_request][:description].strip()
    request_params[:client_id] = params[:feature_request][:client_id]
    request_params[:client_priority] = params[:feature_request][:client_priority]
    request_params[:target_date] = params[:feature_request][:target_date]
    request_params[:ticket_url] = params[:feature_request][:ticket_url].strip()
    request_params[:product_id] = params[:feature_request][:product_id]
    @user_id = current_user.id
    if params[:feature_request][:client_priority].to_i == 1
      @feature_req = FeatureRequest.where(client_id: params[:feature_request][:client_id]).where("status=0")
      if @feature_req.present?
        if @feature_req.map(&:client_priority).include? 1
          @feature_req.each do |req|
            req.client_priority = req.client_priority + 1
            req.save
          end
          @feature = FeatureRequest.new(request_params)
          if @feature.save
            @feature.update_attribute(:user_id, @user_id)
            flash[:notice] = "Successfully created"
            redirect_to feature_request_index_path
          else
            render :new
          end
        else
          @feature = FeatureRequest.new(request_params)
          if @feature.save
            @feature.update_attribute(:user_id, @user_id)
            flash[:notice] = "Successfully created"
            redirect_to feature_request_index_path
          else
            render :new
          end
        end
      else
        @feature = FeatureRequest.new(request_params)
        if @feature.save
          @feature.update_attribute(:user_id, @user_id)
          flash[:notice] = "Successfully created"
          redirect_to feature_request_index_path
        else
          render :new
        end
      end
    else
      @feature = FeatureRequest.new(request_params)
      if @feature.save
        @feature.update_attribute(:user_id, @user_id)
        flash[:notice] = "Successfully created"
        redirect_to feature_request_index_path
      else
        render :new
      end
    end

  end

  def edit
    @feature = FeatureRequest.find(params[:id])
  end

  def update
    request_params[:title] = params[:feature_request][:title].strip()
    request_params[:description] = params[:feature_request][:description].strip()
    request_params[:client_id] = params[:feature_request][:client_id]
    request_params[:client_priority] = params[:feature_request][:client_priority]
    request_params[:target_date] = params[:feature_request][:target_date]
    request_params[:ticket_url] = params[:feature_request][:ticket_url].strip()
    request_params[:product_id] = params[:feature_request][:product_id]

    @feature = FeatureRequest.find(params[:id])
    if @feature.update_attributes(request_params)
      flash[:notice] = "Successfully updated"
      redirect_to feature_request_index_path
    else
      render :edit
    end
  end

  def destroy
    @feature = FeatureRequest.find(params[:id])

    if @feature.present?
      @feature.destroy
      flash[:notice] = "Successfully deleted"
      redirect_to feature_request_index_path
    end
  end

  def deactive_request
    @feature = FeatureRequest.find(params[:id])
    if @feature.update_attribute(:status, 1)
      @feature_req = FeatureRequest.where(client_id: @feature.client_id).where("status=0")
      # raise @feature_req.inspect
      if @feature_req.present?
        @feature_req.each do |req|
          req.client_priority = req.client_priority - 1
          req.save
        end
      flash[:notice] = "Successfully updated"
      redirect_to feature_request_index_path
      end
    else
      render :edit
    end
  end

  def activate_request
    @feature = FeatureRequest.find(params[:id])
    if @feature.update_attribute(:status, 1)
      flash[:notice] = "Successfully updated"
      redirect_to feature_request_index_path
    else
      render :edit
    end
  end

  def complete_request
    if current_user.is_staff == 0
      @feature = FeatureRequest.select("feature_requests.*, clients.title AS client_title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id").where("feature_requests.status=1")
    else
      if params[:status] == 'complete'
        @feature = FeatureRequest.select("feature_requests.*, clients.title AS client_title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id").where("feature_requests.status=1")
      end
    end
  else
    redirect_to new_user_session_path
  end

  private
  def request_params
    params.require(:feature_request).permit(:title, :description, :client_id, :client_priority, :target_date, :ticket_url, :product_id)
  end
end
