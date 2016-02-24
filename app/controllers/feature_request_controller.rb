class FeatureRequestController < ApplicationController

  def index
    if user_signed_in?
      if current_user.is_staff == 0
        @feature = FeatureRequest.select("feature_requests.*, clients.title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id")
      else
        @feature = FeatureRequest.select("feature_requests.*, clients.title, product_areas.product_area, users.first_name").joins("INNER JOIN clients ON feature_requests.client_id=clients.id").joins("INNER JOIN product_areas ON feature_requests.product_id=product_areas.id").joins("INNER JOIN users on users.id=feature_requests.user_id").where("feature_requests.user_id = #{current_user.id}")
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
    request_params[:title] = request_params[:title].strip()
    request_params[:description] = request_params[:description].strip()
    request_params[:client_id] = request_params[:client_id]
    request_params[:client_priority] = request_params[:client_priority]
    request_params[:target_date] = request_params[:target_date]
    request_params[:ticket_url] = request_params[:ticket_url].strip()
    request_params[:product_id] = request_params[:product_id]
    @user_id = current_user.id
    @feature_req = FeatureRequest.where(client_priority: request_params[:client_priority])
    if @feature_req.count > 0
      flash[:notice] = "Client Priority already exist. Please change client priority."
      redirect_to new_feature_request_path
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
    request_params[:title] = request_params[:title].strip()
    request_params[:description] = request_params[:description].strip()
    request_params[:client_id] = request_params[:client_id]
    request_params[:client_priority] = request_params[:client_priority]
    request_params[:target_date] = request_params[:target_date]
    request_params[:ticket_url] = request_params[:ticket_url].strip()
    request_params[:product_id] = request_params[:product_id]

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
      flash[:notice] = "Successfully updated"
      redirect_to feature_request_index_path
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


  private
  def request_params
    params.require(:feature_request).permit(:title, :description, :client_id, :client_priority, :target_date, :ticket_url, :product_id)
  end
end
