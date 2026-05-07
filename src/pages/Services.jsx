import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Services from '../components/Services';
import AnimatedText from '../components/AnimatedText';

const ServicesPage = () => {
  return (
    <PageWrapper>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <AnimatedText 
            text="Our Professional Services" 
            className="text-5xl md:text-7xl font-bold justify-center mb-6" 
          />
          <p className="text-xl opacity-60 max-w-3xl mx-auto">
            High-end digital solutions designed to help you stand out and succeed in the modern world.
          </p>
        </div>
        
        <Services />
        
        {/* Why Choose Me Section */}
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl mb-4 text-accent-cyan">⚡</div>
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-sm opacity-50">Efficient workflows ensuring your projects are delivered on time without compromising quality.</p>
            </div>
            <div>
              <div className="text-4xl mb-4 text-accent-purple">🎯</div>
              <h4 className="text-xl font-bold mb-2">Quality First</h4>
              <p className="text-sm opacity-50">Pixel-perfect designs and clean, maintainable code using the latest industry standards.</p>
            </div>
            <div>
              <div className="text-4xl mb-4 text-accent-cyan">💬</div>
              <h4 className="text-xl font-bold mb-2">Support</h4>
              <p className="text-sm opacity-50">Ongoing support and maintenance to ensure your digital assets continue to perform at their best.</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ServicesPage;
