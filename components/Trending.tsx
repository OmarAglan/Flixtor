const Trending = () => {
  return (
    <section className="relative z-10 px-4 pb-20 pt-20">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-white">Trending Now</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {/* Placeholder movie cards - replace with actual data */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="group relative aspect-[2/3] overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="text-sm font-medium text-white">Movie {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
