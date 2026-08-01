import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { resumeData } from "../data/resume";
import { Mail, MapPin, Phone, Code2 } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Email */}
          <div
            className="p-5 rounded-xl border border-gray-200 dark:border-white/5
                       bg-gray-50 dark:bg-[#111827]/50 flex items-start gap-4"
          >
            <div
              className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-500/10
                         flex items-center justify-center flex-shrink-0"
            >
              <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Email
              </p>

              <a
                href={`mailto:${resumeData.email}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {resumeData.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div
            className="p-5 rounded-xl border border-gray-200 dark:border-white/5
                       bg-gray-50 dark:bg-[#111827]/50 flex items-start gap-4"
          >
            <div
              className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10
                         flex items-center justify-center flex-shrink-0"
            >
              <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {resumeData.phone}
              </p>
            </div>
          </div>

          {/* Location */}
          <div
            className="p-5 rounded-xl border border-gray-200 dark:border-white/5
                       bg-gray-50 dark:bg-[#111827]/50 flex items-start gap-4"
          >
            <div
              className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-500/10
                         flex items-center justify-center flex-shrink-0"
            >
              <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Location
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {resumeData.location}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Connect with me
            </p>

            <div className="flex gap-3">
              {/* GitHub */}
              <a
                href={resumeData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl border border-gray-200 dark:border-white/5
                           bg-gray-50 dark:bg-[#111827]/50 text-gray-400
                           hover:text-gray-700 dark:hover:text-white
                           hover:border-indigo-400 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23A11.4 11.4 0 0112 5.8c1.02.01 2.05.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={resumeData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl border border-gray-200 dark:border-white/5
                           bg-gray-50 dark:bg-[#111827]/50 text-gray-400
                           hover:text-blue-500 hover:border-blue-400 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43A2.06 2.06 0 013.27 5.37a2.06 2.06 0 114.12 0c0 1.14-.93 2.06-2.05 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href={resumeData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-3 rounded-xl border border-gray-200 dark:border-white/5
                           bg-gray-50 dark:bg-[#111827]/50 text-gray-400
                           hover:text-orange-500 hover:border-orange-400 transition-all duration-300"
              >
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}