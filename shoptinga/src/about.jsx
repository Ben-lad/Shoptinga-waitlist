import Contact from "./contact"


const About = () => {
  (function () {
  var options = {
  whatsapp: "+234 906 062 0279", // WhatsApp number
  call_to_action: "Message us", // Call to action
  button_color: "#FF6550", // Color of button
  position: "left", // Position may be 'right' or 'left'
  };
  var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  })();




  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Shoptinga is an ecommerce website that allows you to buy and sell with
        both cryptocurrency and traditional money. Shoppinga is a secure and
        convenient way to shop online. Shoptinga is powered by blockchain
        technology, which means that all transactions are secure and
        transparent. All transactions are recorded on the blockchain, which
        means that they are immutable and cannot be altered. This makes
        Shoptinga a safe and secure way to shop online. Shoppinga also offers a
        wide range of products from a variety of vendors. You can find
        everything from electronics to clothing and even art. Shoppinga also
        offers a variety of payment methods, including cryptocurrency, credit
        cards, and Banks. This makes it easy to find the payment method
        that works best. New to the world of E-commerce, ShopTinga
        helps AFRICANS EASY SHOPPING WITH MONEY AND CRYPTO. Think of it as a
        place where the E-COMMERCE WEBSITE meets the ONLINE SHOPPING MALL.
        Founded in 2022 in Nigeria ,Lagos, ShopTinga makes high quality and easy
        shopping through our process of Enabling shopping with money and crypto.
      </p>
      <Contact />
    </div>

    
  );
};

export default About;
