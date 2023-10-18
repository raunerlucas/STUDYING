package com.dio.padroesprojetospring.service;

import com.dio.padroesprojetospring.model.Cliente;

public interface ClienteService {
    Iterable<Cliente> buscarTodos();

    Cliente buscarPorId(Long id);

    void inserir(Cliente c);
    void atualizar(Long id, Cliente c);

    void deletar(Long id);





}
