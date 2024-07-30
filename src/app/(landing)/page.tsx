'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  FileSearchOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  BarChartOutlined,
  SmileOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Automated Log Analysis',
      description:
        'Say goodbye to manual log file reviews. Our AI assistant automates the entire process, ensuring accuracy and saving you time.',
      icon: <FileSearchOutlined />,
    },
    {
      heading: 'Comprehensive Compliance Testing',
      description:
        'Thoroughly tests against ISO27001 and PCI DSS frameworks, identifying compliance status and areas for improvement.',
      icon: <SafetyOutlined />,
    },
    {
      heading: 'Detailed Reporting',
      description:
        'Receive detailed reports highlighting compliance status, issues, and actionable insights for improvement.',
      icon: <BarChartOutlined />,
    },
    {
      heading: 'Time-Saving Automation',
      description:
        'Automates the tedious task of log file analysis, freeing up your IT and compliance teams for more strategic work.',
      icon: <ClockCircleOutlined />,
    },
    {
      heading: 'Enhanced Accuracy',
      description:
        'Reduces the risk of human error, ensuring more accurate compliance assessments.',
      icon: <SmileOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'IT Security Manager',
      content:
        'This AI assistant has revolutionized our compliance process. It’s incredibly accurate and saves us countless hours.',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Compliance Officer',
      content:
        'The detailed reports are a game-changer. We now have clear insights into our compliance status and know exactly where to improve.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Robert Johnson',
      designation: 'CTO',
      content:
        'Automating log analysis has freed up our team to focus on more strategic initiatives. Highly recommend this tool!',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
    {
      title: 'Testimonials',
      link: '#testimonials',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for small teams',
      monthly: 9,
      yearly: 69,
      features: [
        'Automated Log Analysis',
        'Compliance Testing',
        'Basic Reporting',
      ],
    },
    {
      title: 'Pro',
      description: 'Advanced features for growing teams',
      monthly: 29,
      yearly: 249,
      features: [
        'All Basic Features',
        'Detailed Reporting',
        'Priority Support',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      monthly: 99,
      yearly: 899,
      features: [
        'All Pro Features',
        'Custom Integrations',
        'Dedicated Support',
      ],
    },
  ]

  const questionAnswers = [
    {
      question: 'How does the AI assistant analyze log files?',
      answer:
        'The AI assistant uses advanced algorithms to scan and analyze log files, identifying relevant information and compliance status.',
    },
    {
      question: 'Can it handle large volumes of log files?',
      answer:
        'Yes, the AI assistant is designed to process large volumes of log files efficiently, ensuring timely compliance assessments.',
    },
    {
      question: 'What frameworks does it support?',
      answer:
        'Currently, it supports ISO27001 and PCI DSS frameworks, with plans to add more in the future.',
    },
    {
      question: 'Is there a trial period available?',
      answer:
        'Yes, we offer a 14-day free trial for you to experience the full capabilities of our AI assistant.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Upload Your Log Files',
      description: 'Easily upload your log files to our secure platform.',
    },
    {
      heading: 'Select Compliance Framework',
      description:
        'Choose between ISO27001 and PCI DSS frameworks for analysis.',
    },
    {
      heading: 'AI Analysis',
      description:
        'Our AI assistant thoroughly analyzes the log files based on the selected framework.',
    },
    {
      heading: 'Receive Detailed Report',
      description:
        'Get a comprehensive report with compliance status, issues, and actionable insights.',
    },
  ]

  const painPoints = [
    {
      emoji: '⏳',
      title: 'Time-Consuming Manual Reviews',
    },
    {
      emoji: '⚠️',
      title: 'Risk of Human Error',
    },
    {
      emoji: '💸',
      title: 'Costly Non-Compliance Fines',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Effortless Compliance, Unmatched Accuracy"
        subtitle="Streamline your compliance process with our AI-powered assistant. Save time, reduce errors, and ensure your organization meets ISO27001 and PCI DSS standards."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/4lrjtk-compliancev2-atJV"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy customers"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="The Compliance Challenge"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Compliance with Ease"
        subtitle="Our AI assistant simplifies the compliance process, providing you with the tools you need to succeed."
        features={features}
      />
      <LandingTestimonials
        id="testimonials"
        title="Success Stories"
        subtitle="See how our AI assistant has helped others achieve their compliance goals."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your compliance needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Ready to Simplify Your Compliance Process?"
        subtitle="Get started today and see the difference our AI assistant can make."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
