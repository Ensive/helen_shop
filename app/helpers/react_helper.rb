module ReactHelper
  def react_component(component, id, props)
    sc = script(component, id, props)
    "<div id='#{id}'></div>#{sc}".html_safe
  end

  private

  def script(component, id, props)
    "<script>
      document.addEventListener('DOMContentLoaded', function() {
        reactRender('#{id}', '#{component}', #{props});
      });
    </script>"
  end
end