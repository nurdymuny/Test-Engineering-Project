class ProductAreaController < ApplicationController
  def index
    @product = ProductArea.all()
  end

  def new
    @product = ProductArea.new()
  end

  def create
    req_params[:product_area] = req_params[:product_area].strip()
    req_params[:product_description] = req_params[:product_description].strip()

    @product = ProductArea.new(req_params)
    if @product.save
      flash[:notice] = "Successfully created"
      redirect_to product_area_index_path
    else
      render :new
    end
  end

  def edit
    @product = ProductArea.find(params[:id])
  end

  def update
    req_params[:product_area] = req_params[:product_area].strip()
    req_params[:product_description] = req_params[:product_description].strip()

    @product = ProductArea.find(params[:id])
    if @product.update_attributes(req_params)
      flash[:notice] = "Successfully updated"
      redirect_to product_area_index_path
    else
      render :edit
    end
  end

  def destroy
    @product = ProductArea.find(params[:id])

    if @product.present?
      @product.destroy
      flash[:notice] = "Successfully deleted"
      redirect_to product_area_index_path
    end
  end

  private
  def req_params
    params.require(:product_area).permit(:product_area, :product_description)
  end
end
