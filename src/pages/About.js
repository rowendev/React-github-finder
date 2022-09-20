import React from "react";
import { FaUsers } from "react-icons/fa";

function About() {
  return (
    <>
      <h5 className="text-2xl my-4 card-title justify-center"></h5>

      <div className="mockup-code mb-8">
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
