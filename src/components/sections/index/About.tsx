import AboutCard from "@/components/AboutCard";
import type { Tech } from "../../../../typings";
import { motion } from "framer-motion";

export default function About() {
  let mlTech: Tech[] = [
    { title: "Python", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />, link: "https://www.python.org/" },
    { title: "TensorFlow", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />, link: "https://www.tensorflow.org/" },
    { title: "PyTorch", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />, link: "https://pytorch.org/" },
    { title: "Scikit-Learn", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" />, link: "https://scikit-learn.org/" },
    { title: "Keras", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" />, link: "https://keras.io/" },
    { title: "Hugging Face", icon: <img alt="" draggable={false} className="h-6" src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" />, link: "https://huggingface.co/" },
    { title: "LangChain", icon: <img alt="" draggable={false} className="h-6" src="https://python.langchain.com/img/brand/wordmark.png" />, link: "https://www.langchain.com/" },
    { title: "OpenAI", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" />, link: "https://openai.com/" },
    { title: "CUDA", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nvidia/nvidia-original.svg" />, link: "https://developer.nvidia.com/cuda-toolkit" },
    { title: "JAX", icon: <img alt="" draggable={false} className="h-6" src="https://raw.githubusercontent.com/google/jax/main/images/jax_logo_250px.png" />, link: "https://jax.readthedocs.io/" },
    { title: "XGBoost", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/6/69/XGBoost_logo.png" />, link: "https://xgboost.readthedocs.io/" }
  ]

  let datascienceTech: Tech[] = [
    { title: "NumPy", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" />, link: "https://numpy.org/" },
    { title: "Pandas", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" />, link: "https://pandas.pydata.org/" },
    { title: "Matplotlib", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" />, link: "https://matplotlib.org/" },
    { title: "Seaborn", icon: <img alt="" draggable={false} className="h-6" src="https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" />, link: "https://seaborn.pydata.org/" },
    { title: "Jupyter", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" />, link: "https://jupyter.org/" },
    { title: "OpenCV", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" />, link: "https://opencv.org/" },
    { title: "Polars", icon: <img alt="" draggable={false} className="h-6" src="https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars-logo-dark.svg" />, link: "https://www.pola.rs/" },
    { title: "SciPy", icon: <img alt="" draggable={false} className="h-6" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg" />, link: "https://scipy.org/" },
    { title: "Plotly", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg" />, link: "https://plotly.com/" }
  ]

  let mlOpsTech: Tech[] = [
    { title: "Docker", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />, link: "https://www.docker.com/" },
    { title: "Git", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />, link: "https://git-scm.com/" },
    { title: "GitHub", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />, link: "https://github.com/" },
    { title: "AWS", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />, link: "https://aws.amazon.com/" },
    { title: "FastAPI", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />, link: "https://fastapi.tiangolo.com/" },
    { title: "MLflow", icon: <img alt="" draggable={false} className="h-6" src="https://www.mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" />, link: "https://mlflow.org/" },
    { title: "VS Code", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />, link: "https://code.visualstudio.com/" },
    { title: "Linux", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />, link: "https://www.linux.org/" },
    { title: "PostgreSQL", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />, link: "https://www.postgresql.org/" },
    { title: "MongoDB", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />, link: "https://www.mongodb.com/" },
    { title: "Redis", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" />, link: "https://redis.io/" },
    { title: "Kubernetes", icon: <img alt="" draggable={false} className="h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />, link: "https://kubernetes.io/" }
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="AI/ML Journey"
            description="I'm passionate about artificial intelligence and machine learning, with a focus on building intelligent systems that solve real-world problems. My journey spans from classical ML algorithms to cutting-edge deep learning and LLMs. I specialize in developing end-to-end ML pipelines, from data preprocessing to model deployment, with experience in computer vision, NLP, and generative AI."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="ML/AI Frameworks"
            description="Core frameworks and libraries I use for building, training, and deploying machine learning models and AI applications."
            tech={mlTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Data Science Stack"
            description="Tools and libraries I leverage for data analysis, visualization, and scientific computing in ML workflows."
            tech={datascienceTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-bl"
          />
          <AboutCard
            title="MLOps & Infrastructure"
            description="Technologies I use for ML model deployment, experiment tracking, version control, and production infrastructure."
            tech={mlOpsTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tr"
          />
        </ul>
      </section>
    </>
  );
}
