import Button from '../ui/Button'
import Container from '../ui/Container'
import TriangleAccent from '../ui/TriangleAccent'

export default function Hero({
  title = 'Physical Therapy for Everyone.',
  subtitle = 'With 250+ Physical Therapy and Rehabilitation Clinics, Find Care or a Career Close By.',
  image = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cora-sky via-white to-white">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-cora-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-cora-gray sm:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="#appointment">
              Schedule An Appointment
            </Button>
            <Button variant="outline" size="lg" href="#locations">
              See Locations
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={image}
              alt="Physical therapist supporting a patient during rehabilitation exercise"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cora-navy/30 to-transparent" />
          </div>
        </div>
      </Container>
      <TriangleAccent />
    </section>
  )
}
