import React from "react";

function About() {
  return (
    <>
      <div className="mockup-code mb-8 mx-20" id="about">
        <pre data-prefix="$">
          <code>// About This App . . .</code>
        </pre>
        <pre data-prefix=">">
          <code></code>
        </pre>
        <pre data-prefix=">">
          <code>This app is build with React</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Styling with Tailwind CSS and daisyUI</code>
        </pre>
        <pre data-prefix=">">
          <code></code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Have fun!</code>
        </pre>
        {/* <pre data-prefix=">">
          <code>//</code>
        </pre> */}
        {/* <pre data-prefix=">">
          <code>This app is build with React</code>
        </pre>
        <pre data-prefix=">">
          <code>This app is build with React</code>
        </pre> */}
      </div>
    </>
  );
}

export default About;
