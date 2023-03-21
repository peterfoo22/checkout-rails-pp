class OrdersController < AuthenticatedController
  def all_orders
    render(json: ShopifyAPI::Order.all)
  end
end
 


