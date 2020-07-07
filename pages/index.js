import FrogLayout from '../components/frog-layout'
import FrogMain from '../components/frog-main'

export default function Home() {
  const title = 'Frognx - NextJS Kitchensink'

  return (
    <FrogLayout>
      <FrogMain title={title}>
        <div className="infobox">
          Retrieve values from <code className="text-red-700">.env</code> file.
        </div>
        <p>
        Semper lacus nam fames mus
rutrum imperdiet litora dis, ultrices malesuada condimentum amet vivamus
sapien lorem dictumst, sed mauris mollis natoque tempus ornare penatibus
in, posuere viverra venenatis purus facilisis at massa. Massa taciti
felis suspendisse diam euismod metus consequat rutrum himenaeos
malesuada, lacinia mi mauris elementum nascetur penatibus quis purus
fames praesent, finibus quam senectus donec ultrices id scelerisque
curae dapibus hendrerit, nam odio viverra molestie sagittis dignissim
egestas quisque erat. Libero ex condimentum magnis laoreet orci
imperdiet diam fames per, aptent posuere porta litora commodo class ante
nam torquent, aliquam ultricies amet vivamus bibendum lobortis enim
malesuada nisl sem, curae accumsan id sociosqu non nisi interdum
suscipit.
        </p>
      </FrogMain>
    </FrogLayout>
  )
}
