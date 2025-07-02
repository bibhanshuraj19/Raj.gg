import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../../typings";
import { motion } from "framer-motion";

export default function About() {
  let mlTech: Tech[] = [
    { title: "Python", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "NumPy", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" />, link: "https://numpy.org/" },
    { title: "Pandas", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" />, link: "https://pandas.pydata.org/" },
    { title: "Scikit-Learn", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" />, link: "https://scikit-learn.org/" },
    { title: "TensorFlow", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />, link: "https://www.tensorflow.org/" },
    { title: "PyTorch", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />, link: "https://pytorch.org/" },
    { title: "Matplotlib", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" />, link: "https://matplotlib.org/" },
    { title: "Seaborn", icon: <img alt="" draggable={false} className="h-6" src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" />, link: "https://seaborn.pydata.org/" },
    { title: "Jupyter Notebook", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" />, link: "https://jupyter.org/" },
    { title: "OpenCV", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" />, link: "https://opencv.org/" }
  ];

  let devOpsTech: Tech[] = [
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
    { title: "VS Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "JupyterLab", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1920px-Jupyter_logo.svg.png" />, link: "https://jupyter.org/" }
  ];

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Machine Learning Journey"
            description="I'm a machine learning engineer passionate about building intelligent systems. My journey began with Python and evolved into deep learning, model optimization, and deploying ML APIs. I love solving real-world problems using data-driven approaches."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Core ML Stack"
            description="Technologies I use frequently in ML model development and data analysis."
            tech={mlTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="DevOps / Tools"
            description="Tools I use for code management, containerization, and environment setup."
            tech={devOpsTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <li className="col-span-2 flex justify-center items-center p-4">
            <a href="https://discord.com/users/1182703755129520231" target="_blank" rel="noopener noreferrer">
              <img
                src="https://lanyard.cnrad.dev/api/1182703755129520231"
                alt="Discord Presence"
                className="rounded-xl shadow-md transition hover:scale-105 duration-300"
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
