module ReactHelper
  def client(component, id, props)
    sc = script(component, id, props)
    "<div id='#{id}'></div>#{sc}".html_safe
  end

  def isomorphic(component, id, props)
    sc = script(component, id, props)
    resp = HTTParty.post 'http://localhost:3001',
                  body: { component: component, props: props }.to_json,
                  headers: { 'Content-Type' => 'application/json' }
    resp.body.force_encoding('UTF-8')

    "<div id='#{id}'>#{resp}</div>#{sc}".html_safe
  end

  private

  def script(component, id, props)
    "<script>
      document.addEventListener('DOMContentLoaded', function() {
        reactRender('#{id}', '#{component}', #{props.to_json});
      });
    </script>"
  end
end
