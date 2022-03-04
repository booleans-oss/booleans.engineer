<template>
  <div class="header">
    <img src="@/assets/images/logo.png" alt="logo" />
  </div>
  <div class="title">
    {{ $t('index.header.title') }}
    <span style="color: #ffb83c">&nbsp;Clement</span>
    <IconIc:baseline-verified
      style="font-size: 14pt; margin-left: 0.5rem; color: #643aea"
    />
  </div>
  <div class="profile-details">
    <ul class="list-inline">
      <li>@booleans-oss</li>
      <li>{{ $t('index.header.age') }}</li>
      <li>{{ $t('index.header.job') }}</li>
      <li>{{ $t('index.header.pronouns') }}</li>
    </ul>
  </div>
</template>
