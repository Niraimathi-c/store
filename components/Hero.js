import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">

        <h1 className="display-4 fw-bold">
          New Summer Collection 2026
        </h1>

        <p className="lead">
          Up To 70% OFF On Trending Fashion
        </p>

        <Link
          href="/login"
          className="btn btn-danger btn-lg"
        >
          Shop Now
        </Link>

      </div>
    </section>
  );
}