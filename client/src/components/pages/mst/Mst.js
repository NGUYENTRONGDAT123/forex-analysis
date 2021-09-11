import React from "react";
import Slide from "react-reveal";
import "./Mst.css";
import data from "./MST.json";
import Network from "../../network/Network";

export default function Mst() {
  return (
    <section id="mst">
      <div className="mst-container">
        <div className="mst-row">
          <Slide left duration={1300}>
            <div className="mst-col mst-duration">
              <h1> mst </h1>
              <p className="mst-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Blandit turpis cursus in hac habitasse platea dictumst. Quam
                adipiscing vitae proin sagittis. Varius sit amet mattis
                vulputate enim nulla aliquet. Lectus mauris ultrices eros in
                cursus turpis. Massa id neque aliquam vestibulum morbi blandit
                cursus risus. Est pellentesque elit ullamcorper dignissim cras
                tincidunt. Pellentesque habitant morbi tristique senectus et
                netus. Neque aliquam vestibulum morbi blandit cursus. Arcu dui
                vivamus arcu felis bibendum. Accumsan tortor posuere ac ut
                consequat semper. Nulla porttitor massa id neque aliquam
                vestibulum morbi blandit.
              </p>
              <p className="mst-para">
                Amet tellus cras adipiscing enim eu. Tempor nec feugiat nisl
                pretium fusce id velit ut. Dignissim sodales ut eu sem.
                Condimentum mattis pellentesque id nibh tortor. Eu lobortis
                elementum nibh tellus molestie nunc non blandit. Id aliquet
                risus feugiat in ante metus dictum at tempor. Tempus quam
                pellentesque nec nam aliquam. Tincidunt nunc pulvinar sapien et
                ligula ullamcorper malesuada proin libero. Suspendisse potenti
                nullam ac tortor vitae. Turpis egestas sed tempus urna et
                pharetra pharetra massa. Ante in nibh mauris cursus mattis. Ac
                tortor dignissim convallis aenean et tortor. Egestas congue
                quisque egestas diam in. Nullam non nisi est sit amet facilisis
                magna. Lectus sit amet est placerat in egestas. Consectetur
                adipiscing elit pellentesque habitant.
              </p>
              <p className="mst-para">
                Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.
                Convallis tellus id interdum velit laoreet id donec ultrices.
                Diam maecenas ultricies mi eget mauris. Tincidunt praesent
                semper feugiat nibh sed pulvinar proin. Neque gravida in
                fermentum et sollicitudin ac orci. Dapibus ultrices in iaculis
                nunc sed augue lacus viverra. Volutpat ac tincidunt vitae
                semper. Maecenas accumsan lacus vel facilisis volutpat est velit
                egestas dui. Nibh sed pulvinar proin gravida hendrerit lectus.
                Commodo ullamcorper a lacus vestibulum. Risus viverra adipiscing
                at in tellus integer feugiat scelerisque varius. Tincidunt eget
                nullam non nisi est sit amet. Arcu odio ut sem nulla pharetra
                diam sit. At tellus at urna condimentum mattis pellentesque id
                nibh.
              </p>
              <p className="mst-para">
                Diam sollicitudin tempor id eu nisl nunc mi. Eget nunc
                scelerisque viverra mauris in aliquam. Mi tempus imperdiet nulla
                malesuada. Cras semper auctor neque vitae tempus quam
                pellentesque. Ac felis donec et odio pellentesque diam volutpat.
                Nunc mi ipsum faucibus vitae. Mattis aliquam faucibus purus in
                massa tempor nec. In vitae turpis massa sed elementum tempus.
                Massa id neque aliquam vestibulum morbi blandit cursus risus at.
                Purus sit amet luctus venenatis. Rutrum tellus pellentesque eu
                tincidunt tortor aliquam nulla. Feugiat sed lectus vestibulum
                mattis ullamcorper velit.
              </p>
              <p className="mst-para">
                Adipiscing vitae proin sagittis nisl rhoncus mattis. Sed
                ullamcorper morbi tincidunt ornare massa. Amet mauris commodo
                quis imperdiet massa tincidunt nunc pulvinar. Mauris augue neque
                gravida in. At tellus at urna condimentum. Nulla pharetra diam
                sit amet. Quam quisque id diam vel quam elementum. Tincidunt
                tortor aliquam nulla facilisi cras fermentum. Vulputate enim
                nulla aliquet porttitor lacus. Augue lacus viverra vitae congue
                eu consequat ac felis donec. Non blandit massa enim nec dui nunc
                mattis enim ut. Ultrices tincidunt arcu non sodales neque
                sodales ut etiam. Mauris pharetra et ultrices neque ornare. At
                augue eget arcu dictum varius duis at. Odio ut enim blandit
                volutpat maecenas volutpat blandit aliquam etiam.
              </p>
            </div>
          </Slide>
          <Slide left duration={1300}>
            <div className="mst-col network2">
              {/* <div className="heatmap-graph"> */}
              <Network
                data={data}
                distance={10}
                strength={-10}
                maxDistance={50}
                name={"mst-network"}
                nodeName={"mst-node"}
                lineName={"mst-line"}
                nodeRatio={0.8}
              />
              {/* </div> */}
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
}
