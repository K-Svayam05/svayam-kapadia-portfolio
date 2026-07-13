import React from 'react';

const SkillsSection = () => {
  const groups = [
    {
      title: 'Languages',
      items: ['Python', 'C++', 'TypeScript', 'Java', 'SQL', 'C'],
    },
    {
      title: 'AI / ML & Quant',
      items: [
        'HFT',
        'LLMs & RAG',
        'PyTorch',
        'TensorFlow',
        'Vector Search',
        'Statistical Modeling',
        'QuantLib',
        'Pandas',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: ['OCI', 'AWS', 'Docker', 'Kubernetes', 'Ansible', 'Jenkins CI/CD', 'Linux'],
    },
    {
      title: 'Web & APIs',
      items: ['React', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'Microservices'],
    },
  ];

  const certifications = [
    'Quantitative Finance & Algo Trading',
    'Oracle Cloud Infrastructure',
    'Advanced GenAI (Google Cloud)',
    'Kubernetes',
    'Terraform, Ansible & Docker',
    'IBM AI',
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-neon-emerald/10 rounded-full filter blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-neon-emerald font-mono mr-2">04.</span> Stack
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-emerald to-transparent flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-card/30 border border-border rounded-lg p-5 hover:border-neon-emerald/40 transition-colors"
            >
              <h3 className="text-sm font-mono text-neon-emerald uppercase tracking-wider mb-3">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs md:text-sm px-2.5 py-1 rounded-md bg-tech-800/70 border border-neon-emerald/15 text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-mono text-neon-gold uppercase tracking-wider mb-4">
              Coding profiles
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.codechef.com/users/svayam_05"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element px-4 py-2 bg-tech-800/70 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors"
              >
                CodeChef · Global 52
              </a>
              <a
                href="https://leetcode.com/u/svayam_05/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element px-4 py-2 bg-tech-800/70 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors"
              >
                LeetCode · 1843
              </a>
              <a
                href="https://codeforces.com/profile/svayam.005"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-element px-4 py-2 bg-tech-800/70 rounded-md text-sm hover:bg-neon-emerald/20 hover:text-neon-emerald transition-colors"
              >
                Codeforces · Specialist 1595
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono text-neon-emerald uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-xs md:text-sm px-2.5 py-1 rounded-md border border-border bg-card/40 text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
