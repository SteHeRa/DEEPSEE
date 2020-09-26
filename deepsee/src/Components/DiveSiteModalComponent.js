import React from 'react';

function DiveSiteModal ({ closeModal }) {

  return (
      <div className="modal-container" onClick={() => closeModal()}>
        <div className="modal" onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}>
          <button onClick={() => closeModal()}>X</button>
          <div className="modal-content">
          I'm baby austin franzen actually activated charcoal cornhole cred quinoa
          small batch unicorn chicharrones brunch lumbersexual. Asymmetrical try-hard
          williamsburg small batch health goth whatever art party cray brooklyn.
          Normcore edison bulb art party, marfa knausgaard vaporware blue bottle
          YOLO. Snackwave cronut sriracha thundercats, hot chicken VHS sartorial +1
          knausgaard. Flexitarian enamel pin etsy gentrify locavore seitan 3 wolf
          moon taiyaki woke polaroid prism.
          Etsy pork belly pitchfork direct trade vaporware authentic unicorn,
          cold-pressed tote bag offal copper mug mustache trust fund live-edge.
          Irony YOLO DIY raw denim la croix kogi. Brooklyn semiotics DIY humblebrag.
          Twee post-ironic drinking vinegar pabst DIY, man braid tofu palo santo
          gochujang taiyaki try-hard shabby chic biodiesel tattooed cold-pressed.
          Taiyaki ugh shabby chic vegan ethical hot chicken, sriracha readymade
          tofu brunch dreamcatcher DIY.
          Four dollar toast meh mumblecore lo-fi heirloom actually ramps hella
          butcher woke. Hexagon selvage cornhole irony shaman. Etsy ethical cloud
          bread pop-up lyft sustainable chicharrones man braid. Shoreditch cardigan
          8-bit flexitarian kombucha lyft.
          Vegan la croix next level, meggings craft beer humblebrag chambray.
          Aesthetic helvetica single-origin coffee tilde poutine pok pok knausgaard
          street art drinking vinegar live-edge humblebrag irony PBR&B meditation vape.
          Pinterest bushwick gluten-free knausgaard glossier actually XOXO you probably
          haven't heard of them plaid keffiyeh mlkshk banh mi art party. Chicharrones
          church-key green juice palo santo tousled readymade sriracha cliche gentrify
          tofu. Poke mustache ethical williamsburg ramps neutra. Williamsburg
          cold-pressed vape brooklyn tacos humblebrag.
          Franzen bicycle rights brunch scenester, cliche fingerstache pop-up ramps
          asymmetrical tumblr fixie. Fam adaptogen activated charcoal venmo farm-to-table
          occupy polaroid tumblr, vape locavore wolf craft beer coloring book cloud bread.
          Cardigan church-key marfa, portland 90's fixie art party fashion axe green
          juice cold-pressed street art pour-over post-ironic lyft. VHS bespoke unicorn,
          la croix cloud bread schlitz mlkshk cliche. Heirloom humblebrag succulents
          post-ironic cardigan, jean shorts farm-to-table. Succulents etsy XOXO photo
          booth twee fanny pack. Chia polaroid beard crucifix keytar portland slow-carb
          cornhole.
          Dummy text? More like dummy thicc text, amirite?
          </div>
        </div>
      </div>
    )
}

export default DiveSiteModal;