
# react-native-starter-kit
[![en](https://img.shields.io/badge/lang-en-blue.svg)](https://github.com/erdembasogul/react-native-starter-kit/blob/main/README.tr.md)
Bu proje, React Native ve Expo kullanılarak oluşturulmuş bir project base'dir. Proje, TypeScript, react-navigation/native ve Redux Toolkit gibi teknolojileri içermektedir. Bu project base, yeni React Native uygulamaları başlatmak veya mevcut projeler için bir başlangıç ​​noktası olarak kullanılabilir.


## Kullanılan Teknolojiler ve Paketler
* TypeScript: Statically typed JavaScript for modern development.
* react-navigation/native: React Navigation, mobil uygulamalar için navigasyon yönetimi sağlar.
* @react-navigation/native-stack: Stack-based navigation için React Navigation paketi.
* reduxjs/toolkit: Redux için ofisayonel birçok utility ve toolkit.
* expo: Universal React uygulamaları için bir araç.

## Nasıl Başlatılır

1. Projeyi İndirme

```
git clone https://github.com/your-username/react-native-project-base.git
cd react-native-project-base
```

2. Gerekli Paketlerin Yüklenmesi

```
npm install
```
  veya

```
yarn install
```

3. Projenin Çalıştırılması

```
expo start
```

Bu komut, Expo CLI'yi başlatacak ve geliştirme sunucusunu (development server) başlatacaktır. Geliştirme sunucusu çalıştıktan sonra, projeyi iOS veya Android simulatöründe veya fiziksel cihazda görebilirsiniz.

## Ek Bilgiler
* Projenin temel yapısı App.tsx dosyasındadır.
* Ekranların yönetimi için src/navigation klasöründe StackNavigator veya TabNavigator gibi navigasyon yapıları bulunabilir.
* Redux kullanımı için src/store veya benzeri bir klasörde Redux store'unun oluşturulduğu dosyalar bulunabilir.
* Bu proje temeli, React Native uygulamalarının hızlı bir şekilde başlaması için tasarlanmıştır. İhtiyaçlarınıza göre bu temeli genişletebilir ve özelleştirebilirsiniz.
