import { motion } from "framer-motion";

const features = [
  {
    icon: "🚀",
    title: "Three.js & WebGL",
    description:
      "Build stunning 3D visualizations and interactive space simulations from scratch.",
  },
  {
    icon: "🛸",
    title: "React & TypeScript",
    description:
      "Modern frontend development with type-safe code and component-driven architecture.",
  },
  {
    icon: "🌌",
    title: "Real NASA Data",
    description:
      "Work with live NASA APIs to render actual planetary data and space imagery.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Learn techniques to keep your 3D scenes smooth at 60fps on any device.",
  },
  {
    icon: "🔭",
    title: "Shader Programming",
    description:
      "Write custom GLSL shaders to create realistic atmospheres, stars, and nebulas.",
  },
  {
    icon: "🌍",
    title: "Deploy to Production",
    description:
      "Ship your projects live with Vercel, optimized builds, and CI/CD pipelines.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0a0a0f" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You'll <span style={{ color: "#7c3aed" }}>Master</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete journey from zero to building production-grade 3D web
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl p-6 border border-purple-900/30"
              style={{ backgroundColor: "#12121a" }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
