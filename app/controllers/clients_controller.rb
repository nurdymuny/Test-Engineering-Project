class ClientsController < ApplicationController
  def index
    @clients = Client.all()
  end

  def show
    @client = Client.all()
  end

  def new
    @client = Client.new
  end

  def create
    client_params[:state] = client_params[:title].strip()
    client_params[:city] = client_params[:description].strip()

    @client = Client.new(client_params)
    if @client.save
      flash[:notice] = "Successfully created"
      redirect_to clients_path
    else
      render :new
    end
  end

  def edit
    @clients = Client.find(params[:id])
  end

  def update
    client_params[:state] = client_params[:title].strip()
    client_params[:city] = client_params[:description].strip()

    @client = Client.find(params[:id])
    if @client.update_attributes(client_params)
      flash[:notice] = "Successfully updated"
      redirect_to client_path
    else
      render :edit
    end
  end

  def destroy
    @client = Client.find(params[:id])

    if @client.present?
      @client.destroy
      flash[:notice] = "Successfully deleted"
      redirect_to client_path
    end
  end

  private
  def client_params
    params.require(:client).permit(:title, :description)
  end
end
