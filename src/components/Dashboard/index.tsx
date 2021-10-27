import { useAuth } from "../../Providers/Auth";
import "./style.css";
function Dashboard() {
  const { Logout }: any = useAuth();

  return (
    <>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUAAP////+Wlv+UlP/c3P+goP/m5v/6+v+amv+srP+Pj/+pqf+YmP/t7f/v7/+Jif/Fxf/V1f8QEP+cnP97e/+wsP9zc/9YWP9TU//k5P/39/9hYf++vv8pKf9paf+Njf+AgP/Ly/82Nv89Pf9cXP9wcP8vL/9OTv9AQP8dHf/Pz/+4uP/z8/8/P/9ISP+7u/99ff8//UhiAAAE9klEQVR4nO2dbVMaSxCFV1DxBUQlJr4LJubeJMbk//+6XHWBWa+nu2eomu2unOerM1vz4BYcemabpiGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhGic3o0HmPEHZfp89v68uyqLN/F9S0ZWPIPzjiutX2dbMRxIk7/geT9qCahohkNp8ghOu6y1fp1NDBd42nk1AZUNDD/gWfv1BFTKDU/xpElFAZVyQ2Hm14oCKsWGYzznoKaASqnhZzxlu6qASqnhEZ5yWlVApdAQh5mtj3UFVMoMP+EJfuJaS5khDjOjyuvXKTJc4PGOwkxLieFHPPysuoBKgWGUMNNSYChMua8voJJvOMx6Ofon2/Aej3UWZlqyDSd4rLMw05JruI+HalWrnsg0PMcjF/0IqGQaRgozLXmGx3jgp54EVB4mR8/YDB+woMMw0+XCZIgFj/pauJldi6FwR39Oht2d7QMOW/Z7+A5pMTzAguPkUkKRccVFdUGL4VfbgoVcvqaH9GMwNIYZ7c3Zr+EhXm8aZgYWQZeG/+DlpmFGyOXeDS/hajthRriVnRte49V+SS4jFBmdG97ixaZboUKR0bshXutjehWcy70bnuC1/ptcRMjlzg2neKmz5BpCkdG54Q1eaXaY8WkI/7a19S25hCnMuDTcwQudJ1cQioy+DQ+ErdDvyQWMYcah4VTYCk0vYAwzDg2Fj7irZL5QZPRuiEnDjFBkjGtYFmYiGZaFmUCGO8nkjDATx7A0zMQxLA0zj7vPTHqoH+caJuXDrDCzV1+t0HBdAs4LMzvSInwZrsr4eWEmkOFyKyYzzEQyfN1Oyw0zoQxfqoi5YcahoVBGPC4IMw4NpzO83AdcZPwVx3Ao3MAjeI/uoOKVS0OhEIXYhTHApWEzzza8CWaoPv31limOck4NhaL+e5w0oQxfovJVlmET0LD5kSF4G9KweTQLXjcxDX9aBdsHD+MZNntGw6ewhvhcWIfDdnREQ1O9aXc5OqKh6TTXzXJwSMNmoQpOV2NjGqpfd0/WQ4MaaodJkqGeDOfT/5jDXcJOgVM+EHSbjHRkuFD+L90SrlQ6vE4HOjLUSvJdQ6n82xkY1lA6g5nepIENpaHpuLCGwvGvzodFWEPhLPsz6w/8qIbCWfZXVqEtqqG6zbQK3kENhffR/wmENBTOsq95imyIz7InLE/ZRDQUNqFSfoU1FB7M63IV1dAq2EabeIZimOlyEtLwzi74enI4mqEaZrp8i2eYeY7hIpyhIcy89YhlaAozXe7RtxCHhgNjmOkycXRSQe84AMPMpVDoR7txDg0P8P7vuanQ795wCAvdz/0tFwEMf49EtuGm2gS/QCPhKFF9Q4Xf8L8ht4Ry9E4jg89DKf0t0afFWJ5WHxhmtMP2sCr3cu93dwD6BIcZrSWUUnf00jMLhxm1N0kQQxhm9P6WMQxhmDG0hAphiA8AG/pbhjCEy7M80hPBEFZmTP0tAxjiLgOm/pb+DXGYsfW39G9YHGZa3BuWh5kW74ZPcGnW/pbeDWGYMfe3dG64SZhp8W2Iw4y9v6VvQ7iujOeTXRvCMJPT39Kz4YZhpsWxIQ4z4i8/vcWx4aZhpsWvIW6ZlNes260hbpmU2axbMeyhQ+uS4Tu/pLc3m81yu5HfSL/IN9i70q9ACCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQshfzx+1KkkMzXDi5QAAAABJRU5ErkJggg=="
        alt="logo kenzie"
      />
      <button className="buttonLog" onClick={() => Logout()}>
        Logout
      </button>
    </>
  );
}

export default Dashboard;
