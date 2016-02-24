class StaffsController < Devise::RegistrationsController
  def staff_new
    build_resource({})
    yield resource if block_given?
    resource = User.new
  end


  def registration_staff
    require_params = sign_up_params
    build_resource(require_params)
    resource.save
    resource.update_attribute(:is_staff, 1)
    yield resource if block_given?
    if resource.persisted?
      redirect_to staffs_staff_list_path
    else
      clean_up_passwords resource
      respond_with resource
    end
  end

  def staff_list
    if current_user.is_staff == 0
      @staff = User.where("is_staff =1")
    else
      @staff = User.where("is_staff =1").where("id = #{current_user.id}")
    end

  end

  def staff_edit
    @staff = User.find_by_id(params[:id])
  end

  def update_staff
    require_params = sign_up_params
    @staff = User.find_by_id(params[:id])
    if @staff.update_attributes(require_params)
      flash[:notice] = "Successfully updated"
      redirect_to staffs_staff_list_path
    else
      render :staff_edit
    end
  end

  def destroy
    @staff = User.find_by_id(params[:id])
    if @staff.present?
      @staff.destroy
      flash[:notice] = "Successfully deleted"
      redirect_to staffs_staff_list_path
    end
  end

  private
  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :joining_date)
  end
end