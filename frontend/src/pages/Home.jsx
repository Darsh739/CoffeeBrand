import React, { useEffect, useState } from 'react';
import { Clock, Leaf, Shield, Heart, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { api } from '../utils/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.getProducts();
        if (response.success) {
          setProducts(response.products);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cream to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <span className="text-brown text-sm font-medium">
                  ⭐ Premium Cold Brew Concentrate
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-brown mb-6">
                The Perfect Cold Coffee,{' '}
                <span className="text-primary italic">in Minutes.</span>
              </h1>
              
              <div className="flex items-center gap-2 text-primary mb-6">
                <Clock className="w-5 h-5" />
                <p className="text-lg">Steeped 16-18 hours for a rich, smooth finish</p>
              </div>
              
              <p className="text-xl text-brown/70 mb-8 leading-relaxed">
                Zero effort. Zero waiting. Mix our premium 1:1 concentrate with 
                water or milk for cafe-quality iced coffee right at home.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#flavours" className="btn-primary text-lg">
                  Shop Flavours
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#how-it-works" className="btn-secondary text-lg">
                  See How It Works
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800"
                  alt="Cold brew being poured"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold text-brown mb-1">16-18h</p>
                <p className="text-brown/60">Cold Steep Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brown mb-4">
              How It Works
            </h2>
            <p className="text-xl text-brown/70 max-w-2xl mx-auto">
              Three simple steps to cafe-quality cold brew
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Mix 1:1',
                description: 'Combine equal parts concentrate with water or milk',
                icon: '🥛',
              },
              {
                step: '02',
                title: 'Add Ice',
                description: 'Pour over ice for instant refreshment',
                icon: '🧊',
              },
              {
                step: '03',
                title: 'Enjoy',
                description: 'Sip and savor your perfect cold brew',
                icon: '☕',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-3xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-primary font-bold text-lg mb-2">
                  Step {item.step}
                </div>
                <h3 className="text-2xl font-display font-semibold text-brown mb-3">
                  {item.title}
                </h3>
                <p className="text-brown/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="flavours" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brown mb-4">
              Meet Your New Morning Ritual.
            </h2>
            <p className="text-xl text-brown/70">
              Crafted in small batches for maximum flavor.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-brown/60">Loading flavours...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brown mb-4">
              Why Lazy Brew's?
            </h2>
            <p className="text-xl text-brown/70 max-w-3xl mx-auto">
              We believe great coffee shouldn't require hard work. Our concentrate 
              gives you barista-level quality with zero effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: '100% All Natural',
                description: 'Only filtered water and premium Arabica beans. Nothing else.',
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Ready in Seconds',
                description: 'Skip the lines and the 12-hour brewing process at home.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Zero Preservatives',
                description: 'Pasteurized and sealed tight to stay fresh without chemicals.',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Healthier Choice',
                description: 'Less acidic than hot brewed coffee, easier on your stomach.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-2xl hover:bg-cream transition-colors"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold text-brown mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brown/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brown mb-6">
            Become a Founding Member
          </h2>
          <p className="text-xl text-brown/80 mb-8">
            Sign up to become a founding member and redeem early access to 
            exclusive offers and unreleased flavours.
          </p>
          <a href="#flavours" className="btn-primary text-lg bg-brown text-white hover:bg-brown/90">
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
