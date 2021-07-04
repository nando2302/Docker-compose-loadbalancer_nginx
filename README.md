# **Loadbalancer Nginx Deploying Nodejs Menggunakan Docker-compose** # 

______

## **_Loadbalancer_** ##
###### loadbalancer adalah salah satu dari teknik cluster dengan menggunakan proxy sebagai pengatur jadwal yang ada pada server-server sekarang. dengan adanya teknik cluster loadbalancer ini membuat kerja server seperti terlihat satu server, padahal dibelakang server tersebut terdapat server yang membantu untuk mengelola request yang diberikan oleh client dengan menggunakan algoritma yang berikut ini: ######
- round robin
- least connection
- ratio
- faster

## **_NGINX_** ##
###### Nginx adalah salah satu proxy dan sekaligus web server. dalam hal ini proxy terbagi menjadi 2 yaitu : ######
- forward proxy
- reverse proxy

###### reverse proxy yang membantu dalam kinerja loadbalancer dengan mendistribusika traffik kepada server lain dengan menggunakan virtual-ip yang berikan oleh master ######

## **_Node Js_** ##
###### Node Js merupakan versi kerennya javascript yang bisa di eksekusi di pada local dan juga supayah di permudah dalam memperoleh dependensi yang diperlukan dan mempermudah menjalankan javascript dengan server local yang ada ######

## **_Docker_** ##
###### Docker adalah platform perangkat lunak yang memungkinkan Anda membuat, menguji, dan menerapkan aplikasi dengan cepat. Docker mengemas perangkat lunak ke dalam unit standar yang disebut kontainer yang memiliki semua yang diperlukan perangkat lunak agar dapat berfungsi termasuk pustaka, alat sistem, kode, dan waktu proses. Dengan menggunakan Docker, Anda dapat dengan cepat menerapkan dan menskalakan aplikasi ke lingkungan apa pun dan yakin bahwa kode Anda akan berjalan.######

## **_Instalation_** ##

###### Pertama buat folder dan download lah respositories di atas Jalankan Command DiBawah Ini: ######
______
    docker-compose up