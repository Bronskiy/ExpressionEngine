require_relative('updater')

module Installer
  class Base < Installer::Updater
    set_url '/system/index.php'

    section :install_form, Installer::Form, 'body'
    section :install_success, Installer::Success, 'body'
  end
end
