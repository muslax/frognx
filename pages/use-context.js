import FrogLayout from '../components/frog-layout'
import FrogMain from '../components/frog-main'

export default function FrogContext() {
  const title = 'Application Context'
  return (
    <FrogLayout>
      <FrogMain title={title}>
        <div className="infobox">
          On using <code className="text-red-700">useContext</code>.
        </div>
        <p>
          Aliquam vestibulum tortor lacus erat tristique accumsan auctor felis
          parturient, nostra posuere cubilia netus donec laoreet turpis sit
          efficitur, elit leo ornare suscipit imperdiet nascetur dui aliquet odio
          sapien, volutpat vulputate finibus mauris amet elementum purus hac.
          Vivamus leo molestie pretium cursus pharetra tristique nibh euismod
          curabitur, netus porttitor laoreet ullamcorper ornare turpis at maecenas
          a, habitant pellentesque etiam quam tincidunt risus phasellus fusce
          imperdiet, elit massa mollis velit eu commodo sit orci. Pellentesque
          quisque diam cras feugiat nec lectus tristique mus nulla class, aptent
          aenean dis natoque rhoncus proin blandit laoreet aliquam, ut faucibus
          dolor senectus interdum nostra eros vel inceptos, ac purus urna sodales
          tempus hac habitasse conubia et. Mattis risus massa aptent tortor curae
          commodo tincidunt sollicitudin, aliquam duis ipsum litora nullam proin
          platea phasellus, vivamus nam efficitur vitae pretium felis ornare
          class, lacinia vel hendrerit cubilia dui elit mauris. Nisi justo quam
          nibh nascetur ornare enim ultrices euismod nullam, taciti condimentum
          dui vivamus diam aenean sociosqu felis hendrerit, rhoncus potenti id
          accumsan commodo erat ad varius, odio natoque elit maximus venenatis
          gravida donec ridiculus. Dapibus urna turpis duis nulla sodales volutpat
          orci erat, eu nascetur porttitor sem nisl vel interdum id tellus, magna
          habitant amet inceptos himenaeos porta at lectus ut, tempor convallis
          dignissim congue montes pretium dictumst. Semper lacus nam fames mus
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
