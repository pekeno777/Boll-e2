import { useState } from 'react';
import { ArrowRight, Bot, Headphones, TrendingUp, DollarSign, Target, Plus, Minus, X } from 'lucide-react';

import CustomerServiceFlowchart from '/src/assets/CostumerService.svg?react';
import MarketingFlowchart from '/src/assets/Marketing.drawio.svg?react';
import SalesFlowchart from '/src/assets/Sales.drawio.svg?react';

import customerServiceImageUrl from '/src/assets/CostumerService.svg?url';
import marketingImageUrl from '/src/assets/Marketing.drawio.svg?url';
import salesImageUrl from '/src/assets/Sales.drawio.svg?url';

// Comprehensive protocol data for all services
const protocolData = {
  // Customer Service Protocols
  "customer-greeting": {
    title: "Customer Greeting Protocol",
    description: "Initial customer contact and welcome procedure to establish rapport and gather basic information.",
    steps: [
      "Greet customer within 3 seconds of contact",
      "Introduce yourself and the company",
      "Ask how you can assist them today",
      "Listen actively to their response"
    ],
    category: "Customer Service"
  },
  "issue-identification": {
    title: "Issue Identification Protocol",
    description: "Systematic approach to understanding and categorizing customer issues for efficient resolution.",
    steps: [
      "Ask clarifying questions about the issue",
      "Categorize the problem type",
      "Assess urgency level (Low/Medium/High/Critical)",
      "Document issue details in the system"
    ],
    category: "Customer Service"
  },
  "solution-research": {
    title: "Solution Research Protocol",
    description: "Process for finding appropriate solutions using knowledge base and escalation procedures.",
    steps: [
      "Search knowledge base for similar issues",
      "Review previous case history if available",
      "Consult with team lead if needed",
      "Prepare solution options for customer"
    ],
    category: "Customer Service"
  },
  "resolution-implementation": {
    title: "Resolution Implementation Protocol",
    description: "Step-by-step process for implementing solutions and ensuring customer satisfaction.",
    steps: [
      "Explain the solution clearly to the customer",
      "Implement the solution step by step",
      "Verify the solution works as expected",
      "Confirm customer satisfaction"
    ],
    category: "Customer Service"
  },
  "follow-up": {
    title: "Follow-up Protocol",
    description: "Post-resolution procedures to ensure lasting customer satisfaction and prevent future issues.",
    steps: [
      "Schedule follow-up contact if necessary",
      "Send resolution summary via email",
      "Update customer record with resolution details",
      "Monitor for any recurring issues"
    ],
    category: "Customer Service"
  },

  // Marketing Protocols
  "lead-qualification": {
    title: "Lead Qualification Protocol",
    description: "Process for evaluating and scoring potential leads based on predefined criteria.",
    steps: [
      "Gather demographic and firmographic data",
      "Assess budget and decision-making authority",
      "Evaluate timeline and urgency",
      "Score lead using BANT criteria"
    ],
    category: "Marketing"
  },
  "campaign-setup": {
    title: "Campaign Setup Protocol",
    description: "Comprehensive process for creating and launching marketing campaigns across multiple channels.",
    steps: [
      "Define campaign objectives and KPIs",
      "Identify target audience segments",
      "Create campaign content and assets",
      "Set up tracking and analytics"
    ],
    category: "Marketing"
  },
  "content-creation": {
    title: "Content Creation Protocol",
    description: "Standardized approach to creating engaging and brand-consistent marketing content.",
    steps: [
      "Research target audience preferences",
      "Develop content strategy and calendar",
      "Create and review content drafts",
      "Optimize content for SEO and engagement"
    ],
    category: "Marketing"
  },
  "performance-analysis": {
    title: "Performance Analysis Protocol",
    description: "Data-driven approach to measuring and optimizing marketing campaign effectiveness.",
    steps: [
      "Collect performance data from all channels",
      "Analyze key metrics and conversion rates",
      "Identify optimization opportunities",
      "Generate actionable insights and recommendations"
    ],
    category: "Marketing"
  },
  "audience-segmentation": {
    title: "Audience Segmentation Protocol",
    description: "Process for dividing target market into distinct groups for personalized marketing approaches.",
    steps: [
      "Analyze customer data and behavior patterns",
      "Define segmentation criteria",
      "Create detailed buyer personas",
      "Develop targeted messaging for each segment"
    ],
    category: "Marketing"
  },

  // Sales Protocols
  "prospect-research": {
    title: "Prospect Research Protocol",
    description: "Comprehensive research process to understand prospects before initial contact.",
    steps: [
      "Research company background and industry",
      "Identify key decision makers and influencers",
      "Analyze prospect's current challenges",
      "Prepare personalized approach strategy"
    ],
    category: "Sales"
  },
  "initial-contact": {
    title: "Initial Contact Protocol",
    description: "Best practices for making first contact with potential customers.",
    steps: [
      "Craft personalized opening message",
      "Establish credibility and rapport",
      "Present clear value proposition",
      "Schedule discovery meeting"
    ],
    category: "Sales"
  },
  "needs-assessment": {
    title: "Needs Assessment Protocol",
    description: "Systematic approach to understanding customer needs and pain points.",
    steps: [
      "Ask open-ended discovery questions",
      "Listen actively and take detailed notes",
      "Identify specific pain points and challenges",
      "Quantify impact and urgency of needs"
    ],
    category: "Sales"
  },
  "proposal-development": {
    title: "Proposal Development Protocol",
    description: "Process for creating compelling and customized sales proposals.",
    steps: [
      "Summarize customer needs and requirements",
      "Develop tailored solution recommendations",
      "Create detailed pricing and implementation plan",
      "Include case studies and testimonials"
    ],
    category: "Sales"
  },
  "closing-techniques": {
    title: "Closing Techniques Protocol",
    description: "Proven methods for successfully closing sales deals and overcoming objections.",
    steps: [
      "Identify buying signals and readiness",
      "Address any remaining objections",
      "Present clear next steps and timeline",
      "Secure commitment and finalize agreement"
    ],
    category: "Sales"
  },
  "deal-management": {
    title: "Deal Management Protocol",
    description: "Process for managing sales opportunities through the entire sales pipeline.",
    steps: [
      "Update CRM with all interaction details",
      "Set follow-up reminders and tasks",
      "Coordinate with internal teams as needed",
      "Monitor deal progress and probability"
    ],
    category: "Sales"
  }
};

const getColorClasses = (color: string) => {
  const colors = {
    violet: {
      bg: "bg-violet-600/20",
      text: "text-violet-400",
      border: "border-violet-500/50",
      gradient: "from-violet-500 to-violet-600",
    },
    cyan: {
      bg: "bg-cyan-600/20",
      text: "text-cyan-400",
      border: "border-cyan-500/50",
      gradient: "from-cyan-500 to-cyan-600",
    },
    purple: {
      bg: "bg-purple-600/20",
      text: "text-purple-400",
      border: "border-purple-500/50",
      gradient: "from-purple-500 to-purple-600",
    },
    indigo: {
      bg: "bg-indigo-600/20",
      text: "text-indigo-400",
      border: "border-indigo-500/50",
      gradient: "from-indigo-500 to-indigo-600",
    },
    emerald: {
      bg: "bg-emerald-600/20",
      text: "text-emerald-400",
      border: "border-emerald-500/50",
      gradient: "from-emerald-500 to-emerald-600",
    },
    orange: {
      bg: "bg-orange-600/20",
      text: "text-orange-400",
      border: "border-orange-500/50",
      gradient: "from-orange-500 to-orange-600",
    },
  }
  return colors[color as keyof typeof colors]
}

const ServiceCatalog = () => {
  const [activeService, setActiveService] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [protocolModalOpen, setProtocolModalOpen] = useState(false);
  const [selectedProtocol, setSelectedProtocol] = useState<any>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setModalOpen(true);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.min(Math.max(prevZoom - 0.2, 1), 3));
  };

  const handleFlowchartClick = (event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGElement;
    let clickedElement = target;
    
    // Search up the DOM tree to find an element with an ID
    while (clickedElement && !clickedElement.id) {
      clickedElement = clickedElement.parentElement as SVGElement;
      if (!clickedElement || clickedElement.tagName === 'svg') break;
    }
    
    const id = clickedElement?.id;
    
    if (id && protocolData[id as keyof typeof protocolData]) {
      setSelectedProtocol(protocolData[id as keyof typeof protocolData]);
      setProtocolModalOpen(true);
      event.stopPropagation(); // Prevent modal from opening
    }
  };

  const closeProtocolModal = () => {
    setProtocolModalOpen(false);
    setSelectedProtocol(null);
  };

  const services = [
    {
      title: "Customer Service",
      brief: "24/7 AI-powered customer support with natural language processing and real-time sentiment analysis.",
      description: "Our AI-driven customer experience platform combines natural language processing, sentiment analysis, and predictive modeling to deliver exceptional customer service. From intelligent chatbots to automated ticket routing, we ensure every customer interaction is optimized for satisfaction and efficiency.",
      features: [
        "Intelligent chatbots with 95% accuracy",
        "Real-time sentiment analysis",
        "Automated ticket routing and prioritization",
        "Multilingual support in 15+ languages",
        "Predictive customer behavior modeling",
      ],
      kpis: [
        { label: "Service Level", target: "95%", current: "92%" },
        { label: "First Call Resolution", target: "85%", current: "85%" },
        { label: "Average Handle Time", target: "<120s", current: "18s" },
        { label: "Response Time", target: "<5s", current: "<1s"},
        { label: "Resolution Time", target: "<24h", current: "18s"},
        { label: "Customer Satisfaction", target: "98%", current: "97%"},
        { label: "Occupancy Rate", target: "80%", current: "80%"},
        { label: "Accuracy", target: "95%", current: "92%" },
      ],
      color: "violet",
      icon: Headphones,
      flowchart: CustomerServiceFlowchart,
      flowchartImage: customerServiceImageUrl,
      protocolLink: "#customer-service-protocols",
    },
    {
      title: "Marketing",
      brief: "AI-driven marketing automation with personalized campaigns and customer segmentation.",
      description: "Comprehensive marketing automation that leverages AI to identify prospects, personalize campaigns, and optimize conversion rates through advanced analytics and machine learning.",
      features: [
        "AI-powered lead scoring and qualification",
        "Personalized marketing campaigns",
        "Customer journey optimization",
        "Marketing analytics and insights",
        "Automated email sequences",
      ],
       kpis: [
        { label: "Lead Conversion", target: "85%", current: "82%" },
        { label: "Campaign ROI", target: "400%", current: "350%" },
        { label: "Engagement Rate", target: "75%", current: "72%" },
        { label: "Website Conversion Rate", target: "5%", current: "<1s"},
        { label: "Customer Lifetime Value (CLTV)", target: "+$500", current: "18s"},
        { label: "Net Promoter Score", target: "95%", current: "92%"}
      ],
      color: "cyan",
      icon: TrendingUp,
      flowchart: MarketingFlowchart,
      flowchartImage: marketingImageUrl,
      protocolLink: "#marketing-protocols",
    },
    {
      title: "Sales",
      brief: "Intelligent sales automation with lead scoring and pipeline management.",
      description: "Advanced sales automation that uses AI to qualify leads, predict deal outcomes, and optimize sales processes through intelligent analytics and automated workflows.",
      features: [
        "Intelligent lead scoring and qualification",
        "Sales pipeline optimization",
        "Deal outcome prediction",
        "Sales forecasting and analytics",
        "Automated sales workflows",
      ],
      kpis: [
        { label: "Deal Closure Rate", target: "70%", current: "70%" },
        { label: "Sales Cycle", target: "25 days", current: "28 days" },
        { label: "Average Deal Size", target: "+$10,000", current: "35 days" },
        { label: "Conversion Rate", target: "75%", current: "75%" },
        { label: "Sales Qualified Leads", target: "+80%", current: "80%" },
      ],
      color: "purple",
      icon: DollarSign,
      flowchart: SalesFlowchart,
      flowchartImage: salesImageUrl,
      protocolLink: "#sales-protocols",
    },
  ]

  const FlowchartComponent = services[activeService].flowchart;

  return (
    <section className="flex flex-col items-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-violet-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-7">Our <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Services</span></h1>
      <div className="w-full flex flex-col items-center space-y-10 max-w-6xl">
        <figure
          className="w-full h-auto flex flex-col md:flex-row items-start p-8 justify-center"
          >
          <p className="md:w-2/3 text-center font-sans text-lg py-3">We provide comprehensive AI-powered BPO solutions that transform your business operations. Our intelligent automation reduces costs while enhancing efficiency and scalability across all your processes.</p>
        </figure>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  activeService === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full border border-white/20">
                  <div className="space-y-6">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeService === index
                          ? `bg-gradient-to-br ${getColorClasses(service.color).gradient}`
                          : "bg-gray-100"
                      } transition-all duration-300`}
                    >
                      <IconComponent 
                        className={`w-6 h-6 ${
                          activeService === index ? "text-white" : getColorClasses(service.color).text
                        } transition-all duration-300`}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3
                        className={`text-2xl font-bold font-sans transition-colors duration-300 ${
                          activeService === index ? getColorClasses(service.color).text : "text-brand-text"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-sans leading-relaxed">{service.brief}</p>
                    </div>

                    <div className="pt-4">
                      <div className="w-full h-px bg-gray-200">
                        <div
                          className={`h-px bg-gradient-to-r ${getColorClasses(service.color).gradient} rounded-full transition-all duration-500 ${
                            activeService === index ? "w-full" : "w-0"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20 w-full">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className={`text-4xl font-bold font-sans mb-6 ${getColorClasses(services[activeService].color).text}`}>
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto">
                {services[activeService].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold font-sans text-brand-text mb-8">Key Features</h4>
                <div className="space-y-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-2 h-2 rounded-full mt-3 bg-gradient-to-r ${getColorClasses(services[activeService].color).gradient}`}
                      ></div>
                      <span className="text-gray-600 font-sans leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold font-sans text-brand-text mb-8">Performance Targets</h4>
                <div className="space-y-6">
                  {services[activeService].kpis.map((kpi, index) => {

                    let progressBarWidth = '100%';
                    if (kpi.current.endsWith('%')) {
                      const percentage = parseFloat(kpi.current);
                      progressBarWidth = `${Math.min(percentage, 100)}%`;
                    }

                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-lg font-sans">{kpi.label}</span>
                          <span
                            className={`text-2xl font-bold ${getColorClasses(services[activeService].color).text}`}
                          >
                            {kpi.target}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 bg-gradient-to-r ${getColorClasses(services[activeService].color).gradient} rounded-full transition-all duration-1000`}
                            style={{ width: progressBarWidth }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Flowchart Section */}
            <div className="mt-16 text-center">
              <h4 className="text-2xl font-bold font-sans text-brand-text mb-4">Interactive Service Workflow</h4>
              <p className="text-gray-600 mb-8">Click on any element in the flowchart to view detailed protocols and procedures.</p>
              <div className="bg-gray-100/50 backdrop-blur-sm p-8 rounded-lg border border-gray-200 min-h-[300px] flex items-center justify-center overflow-auto">
                {FlowchartComponent ? (
                    <div className='relative'>
                        <FlowchartComponent 
                            onClick={handleFlowchartClick} 
                            className="max-w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                            style={{ 
                              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                            }}
                        />
                         <button 
                            onClick={() => openModal(services[activeService].flowchartImage)}
                            className="absolute bottom-2 right-2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                            title="View full size"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                ) : (
                  <p className="text-gray-500">No flowchart available for this service.</p>
                )}
              </div>
              <div className="text-center mt-8">
                {services[activeService].protocolLink && (
                  <a
                    href={services[activeService].protocolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-brand-text text-brand-text font-bold py-3 px-8 rounded-full hover:bg-[#252525] hover:text-white transition-all duration-300 inline-flex items-center mx-auto"
                  >
                    View All Protocols
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Full Size Modal */}
     {modalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white p-4 rounded-lg max-w-5xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-gray-800 text-3xl font-bold hover:text-gray-600 transition-colors z-20"
              onClick={closeModal}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="absolute top-2 left-2 flex space-x-2 z-10">
              <button 
                onClick={handleZoomIn}
                className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                title="Zoom in"
              >
                <Plus className="w-5 h-5" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                title="Zoom out"
              >
                <Minus className="w-5 h-5" />
              </button>
            </div>
            <img 
              src={modalImage} 
              alt="Enlarged Flowchart" 
              className="w-full h-auto transform origin-top-left transition-transform duration-100 ease-out"
              style={{ transform: `scale(${zoomLevel})`}}
            />
          </div>
        </div>
      )}

      {/* Protocol Detail Modal */}
      {protocolModalOpen && selectedProtocol && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeProtocolModal}
        >
          <div 
            className="relative bg-white p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={closeProtocolModal}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                selectedProtocol.category === 'Customer Service' ? 'bg-violet-100 text-violet-800' :
                selectedProtocol.category === 'Marketing' ? 'bg-cyan-100 text-cyan-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {selectedProtocol.category}
              </span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{selectedProtocol.title}</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedProtocol.description}</p>
            
            <div>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Implementation Steps:</h4>
              <ol className="space-y-3">
                {selectedProtocol.steps.map((step: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold mr-4 flex-shrink-0 ${
                      selectedProtocol.category === 'Customer Service' ? 'bg-violet-500' :
                      selectedProtocol.category === 'Marketing' ? 'bg-cyan-500' :
                      'bg-purple-500'
                    }`}>
                      {index + 1}
                    </span>
                    <span className="text-gray-700 leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={closeProtocolModal}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  selectedProtocol.category === 'Customer Service' ? 'bg-violet-500 hover:bg-violet-600' :
                  selectedProtocol.category === 'Marketing' ? 'bg-cyan-500 hover:bg-cyan-600' :
                  'bg-purple-500 hover:bg-purple-600'
                } text-white`}
              >
                Close Protocol Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServiceCatalog;