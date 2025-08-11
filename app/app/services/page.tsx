    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-[#1A1A1A] border border-white/10 rounded-lg p-6 flex flex-col hover:border-[#c96a3b] transition-colors duration-300"
        >
          <div className="flex-grow">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-[#c96a3b] p-3 rounded-lg">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{service.title}</h2>
                <div className="text-sm text-[#BDBDBD]">
                  ${service.price} | {service.duration}
                </div>
              </div>
            </div>

            <p className="text-[#BDBDBD] mb-6 text-sm">{service.description}</p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-[#FFE36E] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => handleBookClick(service.buttonLink)}
            className="w-full mt-auto bg-[#c96a3b] text-white py-3 px-4 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
          >
            {service.buttonText}
          </button>
        </div>
      ))}
    </main>
  </div>
</div>
