package com.dio.padroesprojetospring.service.impl;

import com.dio.padroesprojetospring.model.Cliente;
import com.dio.padroesprojetospring.model.ClienteRepository;
import com.dio.padroesprojetospring.model.Endereco;
import com.dio.padroesprojetospring.model.EnderecoRepository;
import com.dio.padroesprojetospring.service.ClienteService;
import com.dio.padroesprojetospring.service.ViaCepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteSerciceImpl implements ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private EnderecoRepository enderecoRepository;
    @Autowired
    private ViaCepService viaCepService;

    @Override
    public Iterable<Cliente> buscarTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente buscarPorId(Long id) {
        var cliente = clienteRepository.findById(id);
        return cliente.get();
    }

    private void salvarClienteComCep(Cliente c) {
        String cep = c.getEndereco().getCep();
        Endereco endereco = enderecoRepository.findById(cep).orElseGet(() -> {
            Endereco newEndereco = viaCepService.consultarCep(cep);
            enderecoRepository.save(newEndereco);
            return newEndereco;});
        c.setEndereco(endereco);
        clienteRepository.save(c);
    }

    @Override
    public void inserir(Cliente c) {
        salvarClienteComCep(c);
    }

    @Override
    public void atualizar(Long id, Cliente c) {
        var clienteBd = clienteRepository.findById(id);
        if (clienteBd.isEmpty()){
            salvarClienteComCep(c);
        }
    }

    @Override
    public void deletar(Long id) {
        clienteRepository.deleteById(id);
    }
}
