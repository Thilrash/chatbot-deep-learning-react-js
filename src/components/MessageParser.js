class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();

      if (lowercase.includes("swot analyse & feedbacks") || lowercase.includes("swot feedbacks") 
      || lowercase.includes("feedbacks")) {
        this.actionProvider.handleFeedBacks();
      }
  
      if (lowercase.includes("thanks") || lowercase.includes("thank you")) {
        this.actionProvider.endChat();
      }
  
      if (lowercase.includes("hello") || lowercase.includes("hi")) {
        this.actionProvider.greet();
      }
  
      if (
        lowercase.includes("i want some business details") ||
        lowercase.includes("i need some business details")
      ) {
        this.actionProvider.detailEntry();
      }
  
      if (
        lowercase.includes("i want some details") ||
        lowercase.includes("i need some details") ||
        lowercase.includes("details")
      ) {
        this.actionProvider.detailBuisness();
      }
  
      if (lowercase.includes("business tips") || lowercase.includes("tips")) {
        this.actionProvider.handleBusinessTips();
      }
  
      if (lowercase.includes("help") || lowercase.includes("business help")) {
        this.actionProvider.handleHelp();
      }
  
      if (lowercase.includes("business idea") || lowercase.includes("ideas")) {
        this.actionProvider.handleIdea();
      }
  
      if (
        lowercase.includes("goods related business") ||
        lowercase.includes("goods")
      ) {
        this.actionProvider.goodsBusiness();
      }
  
      if (
        lowercase.includes("service related business") ||
        lowercase.includes("service")
      ) {
        this.actionProvider.serviceBusiness();
      }
  
      if (lowercase.includes("business?") || lowercase.includes("business")) {
        this.actionProvider.introBiz();
      }

      // Feedback
      if (lowercase.includes("baby product") || lowercase.includes("baby")) {
        this.actionProvider.babyProduct();
      }

      if (lowercase.includes("food product") || lowercase.includes("food")) {
        this.actionProvider.foodProduct();
      }

    }
  }
  
  export default MessageParser;
  