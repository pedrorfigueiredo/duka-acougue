import React from "react";

import {
  Wrapper,
  ImageSection,
  TextSection,
  Title,
  Paragraph,
  Image,
} from "./styles";

import front from "../../assets/front.jpeg";
import front2 from "../../assets/front2.jpg";

const About = () => {
  return (
    <Wrapper>
      <ImageSection>
        <Image src={front} />
        <Image src={front2} />
      </ImageSection>
      <TextSection>
        <Title>Título 1</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Paragraph>
        <Paragraph>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Paragraph>

        <Title>Título 2</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit
          adipiscing bibendum est ultricies integer quis. Cum sociis natoque
          penatibus et magnis dis parturient montes nascetur. Fringilla est
          ullamcorper eget nulla. Malesuada fames ac turpis egestas maecenas
          pharetra convallis posuere morbi. Semper viverra nam libero justo
          laoreet sit amet cursus sit. Pulvinar etiam non quam lacus suspendisse
          faucibus. Sapien et ligula ullamcorper malesuada proin libero nunc.{" "}
        </Paragraph>
        <Paragraph>
          Amet nulla facilisi morbi tempus. Id aliquet lectus proin nibh nisl
          condimentum. Non arcu risus quis varius quam. Etiam non quam lacus
          suspendisse. Nibh cras pulvinar mattis nunc sed. Fermentum dui
          faucibus in ornare quam viverra orci sagittis. Morbi tristique
          senectus et netus et malesuada fames. Fermentum posuere urna nec
          tincidunt praesent semper feugiat nibh. Tristique senectus et netus et
          malesuada fames. Neque aliquam vestibulum morbi blandit cursus risus
          at.
        </Paragraph>
        <Paragraph>
          Non enim praesent elementum facilisis leo vel fringilla est
          ullamcorper. Id volutpat lacus laoreet non curabitur gravida arcu ac.
          Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
          Amet dictum sit amet justo donec enim. Molestie ac feugiat sed lectus
          vestibulum mattis ullamcorper velit sed. Phasellus egestas tellus
          rutrum tellus. Sollicitudin ac orci phasellus egestas tellus rutrum
          tellus pellentesque. Odio tempor orci dapibus ultrices in iaculis
          nunc. Pharetra diam sit amet nisl.
        </Paragraph>
        <Paragraph>
          Augue interdum velit euismod in pellentesque massa placerat duis
          ultricies!
        </Paragraph>
      </TextSection>
    </Wrapper>
  );
};

export default About;
