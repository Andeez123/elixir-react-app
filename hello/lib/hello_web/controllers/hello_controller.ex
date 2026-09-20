defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  def index(conn, _params) do
    # render(conn, :index) # tells phoenix to render index template
    json(conn, %{message: "Hello, world!"}) # returns a JSON response with a message
  end

end
