require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get services" do
    get static_pages_services_url
    assert_response :success
  end

  test "should get payroll" do
    get static_pages_payroll_url
    assert_response :success
  end

  test "should get forms" do
    get static_pages_forms_url
    assert_response :success
  end

  test "should get about" do
    get static_pages_about_url
    assert_response :success
  end

  test "should get contact" do
    get static_pages_contact_url
    assert_response :success
  end

end
