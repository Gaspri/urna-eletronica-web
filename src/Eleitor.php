<?php

class Eleitor
{
    public function __construct(
        public int $id,
        public string $nome = "",
        public string $cpf = "",
        public bool $statusvoto = false
    ) {}
}

