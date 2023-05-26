import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter }: Props) {
  const { title, description } = frontmatter;
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-skin-base group-hover:text-skin-accent">
          <a href={href}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-100 line-clamp-3">{description}</p>
      </div>
    </article>
  );
}