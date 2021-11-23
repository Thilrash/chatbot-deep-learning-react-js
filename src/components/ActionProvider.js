class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  introBiz = () => {
    const message = this.createChatBotMessage(
      "Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services)."
    );
    this.addMessageToState(message);
  };

  endChat = () => {
    const message = this.createChatBotMessage("You are most Welcome!");
    this.addMessageToState(message);
  };

  greet = () => {
    const message = this.createChatBotMessage(
      "👋 Hello, I'm SalFix Bot! How can I help you?"
    );
    this.addMessageToState(message);
  };

  detailEntry = () => {
    const message = this.createChatBotMessage(
      "I'm here to provide service like that. First choose your business type below!",
      {
        widget: "businessType",
      }
    );
    this.addMessageToState(message);
  };

  detailBuisness = () => {
    const message = this.createChatBotMessage(
      "What are the details, do you expecting?"
    );
    this.addMessageToState(message);
  };

  handleIdea = () => {
    const message = this.createChatBotMessage("Here are some key Ideas");
    const message1 = this.createChatBotMessage(
      "01. INTRODUCE NEW PRODUCTS OR SERVICE - Provide a broader range of products or services for your clients. You'll need to research your market to see if there is a desire for your proposed offering. Consider using some of your existing clients as a test group. Getting feedback from a test group can help you manage some of the risks and learn how the product or service can be improved. Pay special attention to marketing and promoting your new products or services so that people know about them."
    );
    const message2 = this.createChatBotMessage(
      "02. EXPAND TO NEW DOMESTIC MARKETS - Expanding into new markets can be costly, but it can increase your client base. Market research will help you understand the potential new market and help you devise a strategy. You'll also need to consider marketing, sales, distribution, and increasing your production to meet the new demand."
    );
    const message3 = this.createChatBotMessage(
      "03. ENHANCE YOUR SALES CHANNELS - Evaluating and optimizing your sales channels could help you reach more clients, increase your market control, and improve profitability."
    );
    const message4 = this.createChatBotMessage(
      "04. MARKETING ACTIVITIES - You may be able to improve the efficiency of your marketing activities. Track the outcome of your current marketing or advertising and be prepared to change your strategy if you are not seeing your desired results. Study your intended clients to know how best to reach them, and plan your marketing strategy accordingly."
    );
    const message5 = this.createChatBotMessage(
      "05. BE AWARE OF THE COMPETITION - Always be aware of what your competitors are doing. This information helps you understand their behaviours, capabilities and limitations. If you have this knowledge, you will be better prepared to defend your market position, react to changes, and find new markets."
    );
    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  handleBusinessTips = () => {
    const message = this.createChatBotMessage(
      "Here are some useful business tips!",
      {
        widget: "BusinessTips",
      }
    );
    this.addMessageToState(message);
  };

  handleHelp = () => {
    const message = this.createChatBotMessage(
      "First choose your business type below!",
      {
        widget: "businessType",
      }
    );
    this.addMessageToState(message);
  };

  goodsBusiness = () => {
    const message = this.createChatBotMessage(
      "Here are some key things to Goods related Business."
    );
    const message1 = this.createChatBotMessage(
      "01. Meet Customer Expectations - Regardless of what industry you’re involved in, your customers aren’t going to choose you solely based on price, but often on quality. In fact, studies have shown that customers will pay more for a product or service that they think is made well or exceeds the standard. Your customers expect you to deliver quality products."
    );
    const message2 = this.createChatBotMessage(
      "02. Quality is Critical to Satisfied Customers - If you fail to meet customers' expectation, they will quickly look for alternatives. Quality is critical to satisfying your customers and retaining their loyalty so they continue to buy from you in the future. Quality products make an important contribution to long-term revenue and profitability. They also enable you to charge and maintain higher prices. Quality is a key differentiator in a crowded market. It’s the reason that Apple can price its iPhone higher than any other mobile phone in the industry – because the company has established a long history of delivering superior products."
    );
    const message3 = this.createChatBotMessage(
      "03. Establish Your Reputation - Quality reflects on your company’s reputation. The growing importance of social media means that customers and prospects can easily share both favorable opinions and criticism of your product quality on forums, product review sites and social networking sites, such as Facebook and Twitter. A strong reputation for quality can be an important differentiator in markets that are very competitive. Poor quality or product failure that results in a product recall campaign can lead to negative publicity and damage your reputation."
    );
    const message4 = this.createChatBotMessage(
      "04. Meet or Exceed Industry Standards - Adherence to a recognized quality standard may be essential for dealing with certain customers or complying with legislation. Public-sector companies, for example, may insist that their suppliers achieve accreditation with quality standards. If you sell products in regulated markets, such as health care, food or electrical goods, you must be able to comply with health and safety standards designed to protect consumers."
    );
    const message5 = this.createChatBotMessage(
      "05. Manage Costs Effectively - Poor quality increases costs. If you do not have an effective quality-control system in place, you may incur the cost of analyzing nonconforming goods or services to determine the root causes and retesting products after reworking them. In some cases, you may have to scrap defective products and pay additional production costs to replace them. If defective products reach customers, you will have to pay for returns and replacements and, in serious cases, you could incur legal costs for failure to comply with customer or industry standards."
    );
    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  serviceBusiness = () => {
    const message = this.createChatBotMessage(
      "Here are some key things to Service related Business."
    );
    const message1 = this.createChatBotMessage(
      "01. The Offering - The challenge of service-business management begins with design. As with product companies, a service business can’t last long if the offering itself is fatally flawed. It must effectively meet the needs and desires of an attractive group of customers. In thinking about the design of a service, however, managers must undergo an important shift in perspective: Whereas product designers focus on the characteristics buyers will value, service designers do better to focus on the experiences customers want to have. For example, customers may attribute convenience or friendly interaction to your service brand. They may compare your offering favorably with competitors’ because of extended hours, closer proximity, greater scope, or lower prices. Your management team must be absolutely clear about which attributes of service the business will compete on."
    );
    const message2 = this.createChatBotMessage(
      "02. The Funding Mechanism - All managers, and even most customers, agree that there is no such thing as a free lunch. Excellence comes at a cost, and the cost must ultimately be covered. With a tangible product, a company’s mechanism for funding superior performance is usually relatively simple: the price tag. Only the customers who forfeit the extra cash can avail themselves of the premium offering. In a service business, developing a way to fund excellence can be more complicated. Many times, pricing is not transaction based but involves the bundling of various elements of value or entails some kind of subscription, such as a monthly fee. In these cases, buyers can extract uneven amounts of value for their money. Indeed, even nonbuyers may derive value in certain service environments. For example, a shopper might spend time learning from a knowledgeable salesperson, only to leave the store empty-handed."
    );
    const message3 = this.createChatBotMessage(
      "03. The Employee Management System - Companies often live or die on the quality of their workforces, but because service businesses are typically people intensive, a relative advantage in employee management has all the more impact there. Top management must give careful attention to recruiting and selection processes, training, job design, performance management, and other components that make up the employee management system. More to the point, the decisions made in these areas should reflect the service attributes the company aims to be known for."
    );
    const message4 = this.createChatBotMessage(
      "04. The Customer Management System - In a service environment, employees aren’t the only people affecting the cost and quality of service delivered. The customers themselves can be involved in operational processes, sometimes to a very large extent, and their input influences their experiences (and often other customers’ too). For example, an architectural firm’s client may explain the purpose of a new facility well or poorly, and that will affect the efficiency of the design process and the quality of the end product. A customer who dithers at a fast-food counter makes the service less fast for everyone behind him."
    );
    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
  };

  // Feedbacks

  handleFeedBacks = () => {
    const message = this.createChatBotMessage(
      "Welcome to SWOT Analyse & Feedbacks section!"
    );
    const message1 = this.createChatBotMessage(
      "Select your Business Type Below",
      {
        widget: "feedbackBusinessType",
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
  };

  pickGoodsBusiness = () => {
    const message = this.createChatBotMessage(
      "Select Your Business Product Store Type Below",
      {
        widget: "storeScale",
      }
    );

    this.addMessageToState(message);
  };

  pickSmallScale = () => {
    const message = this.createChatBotMessage("Small Store");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Low Maintenance Cost"
    );
    const message2 = this.createChatBotMessage(
      "🟣 Weakness - Can not expand the idea to big"
    );
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Brief idea about the selling product"
    );
    const message4 = this.createChatBotMessage(
      "🔴 Threat - Lack of place to store in future"
    );
    const message5 = this.createChatBotMessage(
      "✳️ Overall Small Store SWOT Value - High"
    );
    const message6 = this.createChatBotMessage(
      "👇 Select Business Employee Type Below",
      {
        widget: "employeeTypeInSmall",
      }
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
    this.addMessageToState(message6);
  };

  pickSmallPartTime = () => {
    const message = this.createChatBotMessage("Part Time Employee");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Low Salary Demand"
    );
    const message2 = this.createChatBotMessage(
      "🟣 Weakness - Take time to Expalin Workload"
    );
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Can change when the work not done"
    );
    const message4 = this.createChatBotMessage(
      "🔴 Threat - Leak of business secrets and stratergies"
    );
    const message5 = this.createChatBotMessage(
      "✳️ Overall Part Time Employee SWOT Value - Low"
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  pickSmallFullTime = () => {
    const message = this.createChatBotMessage("Full Time Employee");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Confidentiality"
    );
    const message2 = this.createChatBotMessage(
      "🟣 Weakness - Limited Knowledge"
    );
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Expand the work to Unlimited"
    );
    const message4 = this.createChatBotMessage(
      "🔴 Threat - High Salary Demand"
    );
    const message5 = this.createChatBotMessage(
      "✳️ Overall Part Time Employee SWOT Value - Low"
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  pickMedLarScale = () => {
    const message = this.createChatBotMessage("Medium or Large Store");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Expand the Sales of Product in Future"
    );
    const message2 = this.createChatBotMessage(
      "🟣 Weakness - High Maintenance Cost"
    );
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Product Availablity to Consumer"
    );
    const message4 = this.createChatBotMessage(
      "🔴 Threat - Inventory Management on Each Process"
    );
    const message5 = this.createChatBotMessage(
      "✳️ Overall Medium or Large Store SWOT Value - Balanced"
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  picksServiceBusiness = () => {
    const message = this.createChatBotMessage(
      "Select Your Service Providing Option Below",
      {
        widget: "serviceProvidingOption",
      }
    );
    this.addMessageToState(message);
  };

  pickOnTime = () => {
    const message = this.createChatBotMessage("On Time Delivery");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Provide Full Basis Service"
    );
    const message2 = this.createChatBotMessage(
      "🟣 Weakness - May Interrupt the Service"
    );
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Availability Increase"
    );
    const message4 = this.createChatBotMessage("🔴 Threat - Unsecure Delivery");
    const message5 = this.createChatBotMessage(
      "✳️ Overall Medium or Large Store SWOT Value - High"
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  pickOnScheduledTime = () => {
    const message = this.createChatBotMessage("On Scheduled Delivery");
    const message1 = this.createChatBotMessage(
      "🟡 Strengths - Can organize the delivery"
    );
    const message2 = this.createChatBotMessage("🟣 Weakness - Limited Service");
    const message3 = this.createChatBotMessage(
      "🟢 Opportunity - Availability Increase"
    );
    const message4 = this.createChatBotMessage("🔴 Threat - Unsecure Delivery");
    const message5 = this.createChatBotMessage(
      "✳️ Overall Medium or Large Store SWOT Value - High"
    );

    this.addMessageToState(message);
    this.addMessageToState(message1);
    this.addMessageToState(message2);
    this.addMessageToState(message3);
    this.addMessageToState(message4);
    this.addMessageToState(message5);
  };

  productFeedback = () => {
    const message = this.createChatBotMessage(
      "Type your product (Ex. Baby Product, Food Product)"
    );
    this.addMessageToState(message);
  };

  babyProduct = () => {
    const message = this.createChatBotMessage(
      "Baby Products Market Size Worth $16.78 Billion By 2025"
    );
    const message1 = this.createChatBotMessage(
      "The global baby products market size is expected to reach USD 16.78 billion by 2025, according to a new report by Grand View Research,  Inc. The market is anticipated to register a healthy CAGR of 5.5% over the forecast period. The increasing population in emerging economies of Asia Pacific including India and China is likely to drive the demand for baby products over the forecast period. Increased spending capacity in developed economies of North America and Europe will also augment industry growth over the next few years. "
    );
    this.addMessageToState(message);
    this.addMessageToState(message1);
  };

  foodProduct = () => {
    const message = this.createChatBotMessage(
      "Food Products influencing the Market"
    );
    const message1 = this.createChatBotMessage(
      "The food product is a complex, global network of diverse businesses that supplies most of the food consumed by the world's population. The term food industries covers a series of industrial activities directed at the production, distribution, processing, conversion, preparation, preservation, transport, certification and packaging of foodstuffs. The food industry today has become highly diversified, with manufacturing ranging from small, traditional, family-run activities that are highly labor-intensive, to large, capital-intensive and highly mechanized industrial processes. Many food industries depend almost entirely on local agriculture, produce, or fishing."
    );
    this.addMessageToState(message);
    this.addMessageToState(message1);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
